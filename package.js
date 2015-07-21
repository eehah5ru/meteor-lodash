Package.describe({
  name: "eehah5ru:meteor-lodash",
  summary: "Wrapper for Lo-Dash v3.10.0",
  version: "3.10.0",
  git: "https://github.com/erasaur/meteor-lodash.git"
});

Package.onUse(function(api) {
  Npm.depends(
    {
      "lodash": "3.10.0"
    }
  );

  api.versionsFrom('METEOR@0.9.0');

  // api.addFiles('lodash/lodash.js');
  api.addFiles('export.js', ['server']);

  api.export('lodash', ['server']);
  // api.export('_');
});

