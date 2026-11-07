let cachedConfig = null;
let currentLanguage = localStorage.getItem('siteLanguage') || 'en';

export const loadSiteConfig = async () => {
  if (cachedConfig) return cachedConfig;

  try {
    const response = await fetch('/data/siteConfig.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    cachedConfig = await response.json();
    console.log('Config loaded successfully');
    return cachedConfig;
  } catch (error) {
    console.error('Error loading site configuration:', error);
    return {};
  }
};

export const getSectionConfig = async (sectionName) => {
  const config = await loadSiteConfig();
  return config?.[sectionName] || null;
};

export const isFeatureEnabled = async (featureName) => {
  const config = await loadSiteConfig();
  const feature = config?.[featureName];
  return feature?.enabled ?? false;
};

// Language Management
export const getCurrentLanguage = () => {
  return currentLanguage;
};

export const setCurrentLanguage = (lang) => {
  currentLanguage = lang;
  localStorage.setItem('siteLanguage', lang);
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
};

export const getSupportedLanguages = async () => {
  const config = await loadSiteConfig();
  return config?.settings?.supportedLanguages || ['en'];
};

export const getLanguageName = async (lang) => {
  const config = await loadSiteConfig();
  return config?.settings?.supportedLanguageNames?.[lang] || lang;
};

// Get translated text - handles both strings and language objects
export const getText = (textObj, lang = null) => {
  const language = lang || currentLanguage;

  // If it's just a string, return as is
  if (typeof textObj === 'string') {
    return textObj;
  }

  // If it's an object with language keys
  if (typeof textObj === 'object' && textObj !== null) {
    if ('en' in textObj || 'ur' in textObj) {
      return textObj[language] || textObj['en'] || '';
    }
  }

  return '';
};

// Deep translate all text fields in an object
const translateValue = (value, lang) => {
  // String: return as is
  if (typeof value === 'string') {
    return value;
  }

  // Object with language keys (e.g., {en: "...", ur: "..."})
  if (typeof value === 'object' && value !== null) {
    if ('en' in value || 'ur' in value) {
      return value[lang] || value['en'] || '';
    }

    // Array: translate each element
    if (Array.isArray(value)) {
      return value.map(item => translateValue(item, lang));
    }

    // Regular object: translate each property
    const translated = {};
    for (const key in value) {
      translated[key] = translateValue(value[key], lang);
    }
    return translated;
  }

  // Other types (numbers, booleans, etc): return as is
  return value;
};

// Get translated config section
export const getTranslatedSection = async (sectionName) => {
  const section = await getSectionConfig(sectionName);
  if (!section) return null;

  const lang = getCurrentLanguage();
  return translateValue(section, lang);
};

export const initializeLanguage = async () => {
  const config = await loadSiteConfig();
  const defaultLang = config?.settings?.defaultLanguage || 'en';

  if (!currentLanguage) {
    currentLanguage = defaultLang;
    localStorage.setItem('siteLanguage', defaultLang);
  }
};
