import { toast } from "react-toastify";

const loadInstalledApps = () => {
    const storedAppsSTR = localStorage.getItem("installedAppsList");
    if (storedAppsSTR) {
        const storedAppsData = JSON.parse(storedAppsSTR);
        return storedAppsData;
    }
    else {
        return [];
    }
}


const addToInstalledApps = (id) => {
    const storedAppsData = loadInstalledApps();
    if (storedAppsData.includes(id)) {
        toast("App is already installed");
    }
    else {
        storedAppsData.push(id);
        const data = JSON.stringify(storedAppsData);
        localStorage.setItem('installedAppsList', data);
    }
}

const deleteFromInstalledApps = (id) => {
    const storedAppsData = loadInstalledApps();
    const updatedInstalledApps = storedAppsData.filter(appId => appId !== id)
    localStorage.setItem("installedAppsList", JSON.stringify(updatedInstalledApps));
}
export { addToInstalledApps, loadInstalledApps, deleteFromInstalledApps };