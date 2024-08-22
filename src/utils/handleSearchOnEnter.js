import { hideSuggestion } from "../components/Suggestion/handleSuggestionView";

export function handleSearchOnEnter(event, callback) {
    if (event.key === 'Enter') {
      callback();
      event.target.blur();
      hideSuggestion();
    }
}