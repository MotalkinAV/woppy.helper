function assembleURL(baseUrl, path, searchParams) {
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

//  Импортируется в useHelpStore.js ->

export function _createFetchURL(nid) {
  const baseUrl = "https://woppy.pockethost.io"
  const path = "api/collections/wiki/records";
  const searchParams = {
    filter: `(nid="${nid}")`,
    perPage: 1
  };

  return assembleURL(baseUrl, path, searchParams)
}

//  Импортируется в HelperBody.vue ->

export function _createImgURL(recordId, fileName) {
  const baseUrl = "https://woppy.pockethost.io"
  const path = `api/files/wiki/${recordId}/${fileName}`;

  return assembleURL(baseUrl, path)
}

//  Импортируется в BaseYouTubePlayer.vue ->

export function _createVideoURL(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|^)([^"&?\/\s]{11})/
  );
  const baseUrl = "https://www.youtube.com"
  const path = `embed/${match ? match[1] : null}`

  return assembleURL(baseUrl, path)
}