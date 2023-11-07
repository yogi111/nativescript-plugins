module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@yogi/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @yogi/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@yogi': {
      // @yogi/razorpay-ns
      'razorpay-ns': {
        build: {
          script: 'nx run razorpay-ns:build.all',
          description: '@yogi/razorpay-ns: Build',
        },
      },
      // @yogi/paytm-all-in-one-ns
      'paytm-all-in-one-ns': {
        build: {
          script: 'nx run paytm-all-in-one-ns:build.all',
          description: '@yogi/paytm-all-in-one-ns: Build',
        },
      },
      // @yogi/google-place-ns
      'google-place-ns': {
        build: {
          script: 'nx run google-place-ns:build.all',
          description: '@yogi/google-place-ns: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'razorpay-ns': {
        script: 'nx run razorpay-ns:focus',
        description: 'Focus on @yogi/razorpay-ns',
      },
      'paytm-all-in-one-ns': {
        script: 'nx run paytm-all-in-one-ns:focus',
        description: 'Focus on @yogi/paytm-all-in-one-ns',
      },
      'google-place-ns': {
        script: 'nx run google-place-ns:focus',
        description: 'Focus on @yogi/google-place-ns',
      },
      reset: {
        script: 'nx g @yogi/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
