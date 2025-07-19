import handleResponseFromAPI from "./2-then";
import getFullResponseFromAPI from "./1-promise";

const promise = getFullResponseFromAPI(true);
handleResponseFromAPI(promise);