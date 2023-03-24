import getConfigs from "./config.common";

// backend 서버 URL
const baseUrl = "http://backend.grapefruit-honey-black-tea.shop";
const mode = "dev";

const configDev = getConfigs({
  baseUrl,
  mode,
});

export default configDev;
