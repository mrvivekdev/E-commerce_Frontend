
export default function CreataNewUrl(FnCall){
    if(FnCall){
        const envServerIp = import.meta.env.VITE_SERVER_IP;
        const envServerPort = import.meta.env.VITE_SERVER_PORT;
        const MergeServerConfig = `${envServerIp}${envServerPort}`

        const SpliteImage = FnCall.split("http://localhost:9090")[1];
        const margeImage = `${MergeServerConfig}${SpliteImage}`;
        return margeImage

    } else{
        return null;
    }
};