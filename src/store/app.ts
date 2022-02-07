import { Ref, ref } from "vue";
import { RouteLocationNormalized } from "vue-router";

export const AUTH_KEY = "les-francs-token";
export const AUTH_TYPE = "les-francs-type-auth";

export const getToken = async (
  to?: RouteLocationNormalized
): Promise<string | null> => {
  const token = window.localStorage.getItem(AUTH_KEY);
  if (token || !to?.query.code) {
    return token;
  }

  let body: Array<string> | string = [];
  const details: { [label: string]: string } = {
    client_id: process.env.VUE_APP_DISCORD_CLIENT_ID,
    client_secret: process.env.VUE_APP_DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    code: to.query.code as string,
    redirect_uri: process.env.VUE_APP_DISCORD_REDIRECT_URI,
  };

  for (const property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    body.push(encodedKey + "=" + encodedValue);
  }
  body = body.join("&");

  const json = await fetch("https://discord.com/api/v8/oauth2/token", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then((response) => response.json());

  if (json.error) {
    console.error(json);
    return null;
  }

  window.localStorage.setItem(AUTH_KEY, json.access_token);
  window.localStorage.setItem(AUTH_TYPE, json.token_type);

  return json.access_token;
};

export interface App {
  authenticated: boolean;
  authenticationError?: string;
  username?: string;
  email?: string;
  discord?: string;
  editMode: boolean;
}

export const state: Ref<App> = ref({
  authenticated: false,
  editMode: false,
});
