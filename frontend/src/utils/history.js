import { createBrowserHistory} from 'history';

export const history = createBrowserHistory();

// export const history = createMemoryHistory({
//     initialEntries: ['/'], // The initial URLs in the history stack
//     initialIndex: 0, // The starting index in the history stack
//     keyLength: 6, // The length of location.key
//     // A function to use to confirm navigation with the user. Required
//     // if you return string prompts from transition hooks (see below)
//     getUserConfirmation: null
// });
