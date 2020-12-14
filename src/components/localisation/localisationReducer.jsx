export const availableLanguages = [
    { shortCode: 'PT', label: 'Portuguese' },
    { shortCode: 'EN', label: 'English' }
]

export const initialState = {
    selectedLanguage: availableLanguages[0]['shortCode'],
    iconLanguage: availableLanguages[0]['icon']
}

export function reducer(state, action) {
    const { type, payload } = action; 

    switch (type) {
        case 'LANGUAGE_UPDATE': {
            return { ...state, selectedLanguage: payload }
        }
        default:
            return state;
    }
}