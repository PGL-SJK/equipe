/**
 * Configurações do Google Sheets API
 * Sistema de Gestão de Equipe
 */

// Configurações principais do Google Sheets
const GOOGLE_SHEETS_CONFIG = {
    // ID da planilha Google Sheets
    SPREADSHEET_ID: '1T8UVwalXffnC3EKWBxvSD5GawV5aHh7U1JNTAEUqqP8',

    // API Key do Google Cloud Console
    API_KEY: 'AIzaSyDSlHmeLWmo_AqlgnfHOgoxzj8r9JGZKd4',

    // Service Account Email
    SERVICE_ACCOUNT_EMAIL: 'gestao-equipe-service@gestaoequipe-470023.iam.gserviceaccount.com',

    // Nomes das abas na planilha
    SHEETS: {
        COLABORADORES: 'colaboradores',
        ATRIBUICOES: 'atribuicoes'
    },

    // Ranges para leitura/escrita
    RANGES: {
        COLABORADORES: 'colaboradores!A:D',
        ATRIBUICOES: 'atribuicoes!A:D'
    },

    // Configurações de sincronização
    SYNC: {
        AUTO_SYNC: true,
        SYNC_INTERVAL: 30000, // 30 segundos
        RETRY_ATTEMPTS: 3,
        RETRY_DELAY: 1000 // 1 segundo
    }
};

// URL base da API do Google Sheets
const SHEETS_API_BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets';

// Função para obter URL completa da API
function getSheetsApiUrl(range) {
    return `${SHEETS_API_BASE_URL}/${GOOGLE_SHEETS_CONFIG.SPREADSHEET_ID}/values/${range}?key=${GOOGLE_SHEETS_CONFIG.API_KEY}`;
}

// Função para obter URL de escrita na API
function getSheetsWriteApiUrl(range) {
    return `${SHEETS_API_BASE_URL}/${GOOGLE_SHEETS_CONFIG.SPREADSHEET_ID}/values/${range}?valueInputOption=USER_ENTERED&key=${GOOGLE_SHEETS_CONFIG.API_KEY}`;
}

// Configurações de cache local
const CACHE_CONFIG = {
    ENABLED: true,
    EXPIRY_TIME: 300000, // 5 minutos
    STORAGE_KEY: 'gestao_equipe_cache'
};

// Configurações de interface
const UI_CONFIG = {
    ANIMATION_DURATION: 300,
    TOAST_DURATION: 3000,
    LOADING_DELAY: 500
};

// Configurações de validação
const VALIDATION_CONFIG = {
    MIN_NAME_LENGTH: 2,
    MAX_NAME_LENGTH: 100,
    MIN_FUNCTION_LENGTH: 2,
    MAX_FUNCTION_LENGTH: 100,
    MIN_ACTIVITY_LENGTH: 5,
    MAX_ACTIVITY_LENGTH: 200
};

// Exportar configurações (para uso em módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GOOGLE_SHEETS_CONFIG,
        SHEETS_API_BASE_URL,
        getSheetsApiUrl,
        getSheetsWriteApiUrl,
        CACHE_CONFIG,
        UI_CONFIG,
        VALIDATION_CONFIG
    };
}

// Log de inicialização
console.log('📊 Configurações do Google Sheets carregadas:', {
    spreadsheetId: GOOGLE_SHEETS_CONFIG.SPREADSHEET_ID,
    serviceAccount: GOOGLE_SHEETS_CONFIG.SERVICE_ACCOUNT_EMAIL,
    autoSync: GOOGLE_SHEETS_CONFIG.SYNC.AUTO_SYNC
});
