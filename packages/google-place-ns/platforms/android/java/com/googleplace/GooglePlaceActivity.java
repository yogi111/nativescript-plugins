package com.googleplace;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.google.android.gms.common.api.Status;
import com.google.android.libraries.places.api.Places;
import com.google.android.libraries.places.api.model.AddressComponent;
import com.google.android.libraries.places.api.model.Place;
import com.google.android.libraries.places.api.net.PlacesClient;
import com.google.android.libraries.places.widget.Autocomplete;
import com.google.android.libraries.places.widget.AutocompleteActivity;
import com.google.android.libraries.places.widget.model.AutocompleteActivityMode;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

public class GooglePlaceActivity extends Activity {
    static int AUTOCOMPLETE_REQ_CODE = 3342;
    PlacesClient placesClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = getIntent();
        String options = intent.getStringExtra("options");
        try {
            JSONObject optionJson = new JSONObject(options);
            String view = optionJson.getString("view");
            String key = optionJson.getString("key");
            String hint = optionJson.getString("hint");
            String countriesStr = optionJson.getString("countries");
            List<String> countries = new ArrayList<String>(Arrays.asList(countriesStr.split(",\\s*")));
            Places.initialize(this, key);
            this.placesClient = Places.createClient(this);
            this.startAutoCompleteActivity(view, hint, countries);
        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
    }

    public void startAutoCompleteActivity(String view, String hint, List<String> countries) {
        Log.d("GooglePlaceActivity", "view ===> " + view + " & Hint ==> " + hint + " & countries ==> " + String.join(", ", countries));
        Autocomplete.IntentBuilder intentBuilder;
        if (Objects.equals(view, "FULL")) {
            intentBuilder = new Autocomplete.IntentBuilder(AutocompleteActivityMode.FULLSCREEN,
                    Arrays.asList(Place.Field.ID, Place.Field.NAME, Place.Field.ADDRESS, Place.Field.ADDRESS_COMPONENTS, Place.Field.LAT_LNG)
            );
        } else {
            intentBuilder = new Autocomplete.IntentBuilder(AutocompleteActivityMode.OVERLAY,
                    Arrays.asList(Place.Field.ID, Place.Field.NAME, Place.Field.ADDRESS, Place.Field.ADDRESS_COMPONENTS, Place.Field.LAT_LNG)
            );
        }
        if (hint != null & !hint.trim().isEmpty()) {
            intentBuilder.setHint(hint);
        } else {
            intentBuilder.setHint("Search Address...");
        }

        if (countries.size() > 0) {
            intentBuilder.setCountries(countries);
        }
        Intent intent = intentBuilder.build(this);
        startActivityForResult(intent, GooglePlaceActivity.AUTOCOMPLETE_REQ_CODE);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == GooglePlaceActivity.AUTOCOMPLETE_REQ_CODE) {
            if (resultCode == RESULT_OK) {
                Place place = Autocomplete.getPlaceFromIntent(data);
                JSONObject response = new JSONObject();
                try {
                    response.put("id", place.getId());
                    response.put("name", place.getName());
                    response.put("address", place.getAddress());
                    response.put("latitude", place.getLatLng().latitude);
                    response.put("longitude", place.getLatLng().longitude);
                    Map<String, String> componentMappings = new HashMap<>();
                    componentMappings.put("isoCountryCode", "COUNTRY");
                    componentMappings.put("country", "COUNTRY");
                    componentMappings.put("administrativeArea", "ADMINISTRATIVE_AREA_LEVEL_1");
                    componentMappings.put("subAdministrativeArea", "ADMINISTRATIVE_AREA_LEVEL_5");
                    componentMappings.put("locality", "LOCALITY");
                    componentMappings.put("subLocality", "SUBLOCALITY");

                    for (Map.Entry<String, String> entry : componentMappings.entrySet()) {
                        String key = entry.getKey();
                        String type = entry.getValue();

                        Optional<AddressComponent> addressComponent = Objects.requireNonNull(place.getAddressComponents()).asList().stream()
                                .filter(ac -> ac.getTypes().stream()
                                        .anyMatch(s -> {
                                            Log.d("GooglePlaceActivity", "type ==> " + type + " Address Type ==>" + s);
                                            return Objects.equals(s.toUpperCase(), type.toUpperCase());
                                        }))
                                .findFirst();

                        if (addressComponent.isPresent()) {
                            response.put(key, addressComponent.get().getName());
                        }
                    }
                    String responseString = response.toString();
                    Intent intent = new Intent();
                    intent.putExtra("response", responseString);
                    setResult(RESULT_OK, intent);
                    finish();
                } catch (JSONException e) {
                    throw new RuntimeException(e);
                }
            } else if (resultCode == AutocompleteActivity.RESULT_ERROR) {
                Status status = Autocomplete.getStatusFromIntent(data);
                JSONObject response = new JSONObject();
                try {
                    response.put("status_code", status.getStatusCode());
                    response.put("status_message", status.getStatusMessage());
                    String responseString = response.toString();
                    Intent intent = new Intent();
                    intent.putExtra("error", responseString);
                    setResult(RESULT_CANCELED, intent);
                    finish();
                } catch (JSONException e) {
                    throw new RuntimeException(e);
                }
            } else if (resultCode == RESULT_CANCELED) {
                JSONObject response = new JSONObject();
                try {
                    response.put("status_code", 0);
                    response.put("status_message", "User has canceled!");
                    String responseString = response.toString();
                    Intent intent = new Intent();
                    intent.putExtra("error", responseString);
                    setResult(RESULT_CANCELED, intent);
                    finish();
                } catch (JSONException e) {
                    throw new RuntimeException(e);
                }
            }
        }
    }
}