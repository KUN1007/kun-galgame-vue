export default {
  header: {
    name: 'KUN Visual Novel',
    pool: 'POOL',
    create: 'CREATE',
    technique: 'TECHNIQUE',
    about: 'ABOUT',
    return: 'HOME',
    settings: {
      name: 'Settings',
      mode: 'Mode',
      language: 'Language',
      width: 'Main Page Width',
      background: 'Background Setting',
      preset: 'Use our preset background',
      custom: 'Custom Background',
      url: 'Paste the picture url here',
      confirm: 'confirm',
      restore: 'Restore blank background',
      recover: 'Recover all settings to default',
    },
  },
  back: {
    back: 'Back',
  },
  mainPage: {
    header: {
      filter: 'Filter',
      search: 'Search Topics',
      all: 'All Topics',
      history: 'Search History',
      clear: 'Clear all history',
      updated: 'Restore default',
      time: 'Sort by time',
      popularity: 'Sort by popularity',
      views: 'Sort by views',
      likes: 'Sort by likes',
      replies: 'Sort by replies',
      comments: 'Sort by comments',
    },
    asideActive: {
      fold: 'Fold Aside',
      create: 'CREATE NEW!',
      update: 'Update',
      balance: 'P & L',
      ranking: 'Ranking',
      bylaw: 'Bylaw',
      contact: 'Join Us',
      nonMoe: 'Non-moe',
      hot: `Today's Hot Topic`,
      new: `Today's New Topic`,
    },
    footer: {
      title: {
        communicate: 'Other Topic',
        technique: 'Technique',
        about: 'About Us',
        friend: 'Links',
      },
      item: {
        daily: 'Daily Communication',
        chat: 'Chatting',
        execute: 'Visual Novel Execute',
        globalization: 'Visual Novel Globalization',
        make: 'Visual Novel Making',
        privacy: 'Privacy',
        principle: 'Principle',
        balance: 'Profit and Loss',
        acgngame: 'ACGNGAME',
        shinnku: `Shinnku's Visual Novel`,
        ymgal: 'YM galgame',
      },
      describe: {
        title: 'KUN Visual Novel',
        kun1: 'The CUTEST Visual Novel Forum In The World!',
        kun2: 'To Create The Best Atmosphere',
        kun3: 'NO ADs Forever',
        kun4: 'Free Forever',
      },
      contact: 'Contact Us',
    },
  },
  topic: {
    aside: {
      top: 'Back Top',
      timeSort: 'Time Sort',
      likeSort: 'Like Sort',
      commentSort: 'Reply Sort',
      tags: 'Topics Under the Same Tags',
      master: 'Other Topics of The Master',
    },
  },
  update: {
    next: 'Next Version',
    update: 'Update Info',
    info: 'Update Preview / More Info',
    visit: 'Click to visit github',
    time: 'Estimated update time',
    history: 'History Version',
  },
  balance: {
    pl: 'Income and Expenditure Statement', // Profit and Loss
    income: 'INCOME',
    totalIncome: 'Total Income',
    expenditure: 'EXPENDITURE',
    totalExpenditure: 'Total Expenditure',
    status: 'Economic Status',
    deficitStatus: 'DEFICIT',
    deficitAmount: 'Deficit Amount',
    surplusStatus: 'Surplus',
    surplusAmount: 'Surplus Amount',
  },
  nonMoe: {
    log: 'Non-moe Record',
    title: `All the non-moe behavior were recorded here, don't do that`,
    reason: 'reason',
    consequence: 'consequence',
    moemoepoint: 'moemoepoint',
  },
  contact: {
    title: 'Join / Contact Us',
  },
  edit: {
    title: 'Title',
    word: 'Words',
    editorHeight: 'Editor Height',
    editorMode: 'Editor Mode',
    minimal: 'Minimal',
    default: 'Default',
    essential: 'Essential',
    full: 'Full',
    tagsHint: 'Hot Tags',
    refresh: 'Refresh the page',
    help1: "The topic's title length should be between 1 and 40 characters.",
    help2: "You can click on the left settings to adjust the editor's mode.",
    help3: "The website's code is handwritten, and errors are inevitable.",
    help4: 'If you encounter any errors, please',
    contact: ' Contact Us.',
    tags: 'Please input topic tags',
    hint: `Hint: (A single tag should be within 14 characters, choose at least one and up to 7 tags). You can enter text and press \`Enter\` to create a tag.`,
    hot: 'Popular Tags (Click to Select) : ',
    categories:
      'Click to select topic categories (multiple selections allowed) : ',
    Galgame: 'Visual Novel',
    Technique: 'Technique',
    Others: 'Others',
    publish: 'Confirm Publish',
    draft: 'Save Draft',
  },
  login: {
    loginTitle: 'Login',
    forget: 'Forgot your password? Click here to send reset email',
    loginUsername: 'Username or email',
    loginPassword: 'Password',
    capture: 'Click to proceed with the human verification process',
  },
  // 非页面组件这里统一用大驼峰
  ComponentAlert: {
    confirm: 'OK',
    cancel: 'Cancel',
  },
  AlertInfo: {
    edit: {
      publish: 'Confirm to publish?',
      publishSuccess: 'Publish Successfully',
      publishCancel: 'Cancel Publish',
      draft: 'The draft has been saved successfully!',
    },
    login: {
      success: 'Login Successfully! Welcome to KUN Visual Novel ~ ',
      emptyUsername: 'Username cannot be empty',
      emptyPassword: 'Password cannot be empty',
      invalidUsername:
        'Invalid username. Username should be 1 to 17 characters long and can include: Chinese characters, English letters, numbers, underscore, and tilde (~)',
      invalidPassword:
        'Invalid password format. Password must be 6 to 17 characters long and must include at least one letter and one number. It can optionally include special characters such as \\w!@#$%^&()-+=',
    },
    capture: {
      click: 'Please click above to complete the human verification',
      success: 'Human-machine identity verification successful',
      text: 'abcdefghijklmnopqrstuvwxyz',
      order: 'Please click the characters in order',
      refresh: 'Refresh',
      error: 'Click error, please click again',
    },
  },
}
