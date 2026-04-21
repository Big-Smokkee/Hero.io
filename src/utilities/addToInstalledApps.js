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
        alert("App is already installed");
    }
    else {
        storedAppsData.push(id);
        const data = JSON.stringify(storedAppsData);
        localStorage.setItem('installedAppsList', data);
    }
}
export { addToInstalledApps, loadInstalledApps };