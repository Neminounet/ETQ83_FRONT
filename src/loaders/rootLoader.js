import { getUser } from "../apis/user";

async function rootLoader() {
    return getUser();
}

export default rootLoader;