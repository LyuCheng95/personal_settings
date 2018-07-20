module.exports = {
    config: {
      // default font size in pixels for all tabs
      fontSize: 11,
  
      // font family with optional fallbacks
      fontFamily: '"Ubuntu Monospace", "RobotoMono, Nerd Font", Fira Code, Roboto Mono, "DejaVu Sans Mono", "Lucida Console", monospace',
  
      // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
      cursorColor: '#ffcc00',
  
      // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
      cursorShape: 'BLOCK',
  
      // color of the text
      foregroundColor: '#fff',
  
      // terminal background color
      backgroundColor: '',
  
      // border color (window, tabs)
      borderColor: '',
  
      // custom css to embed in the main window
      css: '',
  
      // custom css to embed in the terminal window
      termCSS: '',
  
      // custom padding (css format, i.e.: `top right bottom left`)
      padding: '12px 14px',
  
      hypertabs: {
        trafficButtons: true,
      },
  
      // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
      // if left empty, your system's login shell will be used by default
      shell: '',
  
      // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
      // by default ['--login'] will be used
      shellArgs: ['--login'],
  
      // for environment variables
      env: {},
  
      // set to false for no bell
      bell: 'SOUND',
  
      // if true, selected text will automatically be copied to the clipboard
      copyOnSelect: false,
  
      cursorBlink: true
  
      // URL to custom bell
      // bellSoundURL: 'http://example.com/bell.mp3',
  
      // for advanced config flags please refer to https://hyper.is/#cfg
    },
  
    // a list of plugins to fetch and install from npm
    // format: [@org/]project[#version]
    // examples:
    //   `hyperpower`
    //   `@company/project`
    //   `project#1.0.1`
    //    hyper-material-theme, hyperterm-gruvbox-dark, hyperterm-firewatch
    plugins: ['hyperterm-cursor', 'hyper-statusline', 'hyper-tabs-enhanced', 'hyperminimal'],
  
    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: []
  };
  