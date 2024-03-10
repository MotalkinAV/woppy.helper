//  Импортируется в useHelpStore.js

export default function _createFechURL(nid) {

  const baseUrl = "https://woppy.pockethost.io";
  const path = "api/collections/wiki/records";
  const searchParams = {
    filter: `(nid="${nid}")`,
    perPage: 1
  };

  const url = new URL(baseUrl);

  if (path) {
    url.pathname += path;
  }

  if (searchParams) {
    Object.keys(searchParams).forEach((key) => {
      url.searchParams.append(key, searchParams[key]);
    });
  }

  return url.toString();
}
