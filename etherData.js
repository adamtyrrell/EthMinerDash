const getMinerData = async () => {
    try {
        await fetch (
            'http://72.135.11.115:22333/api/v1/status'
        )
        .then((res) => res.json())
        .then((data) => obj = data)
        console.log(obj.miner.devices[0]);


        
    } catch (error) {
        console.log('looks like you messed something up');
    }

    const device1 = obj.miner.devices[0];
    const device2 = obj.miner.devices[1];
    const device3 = obj.miner.devices[2];
    const device4 = obj.miner.devices[3];
    const device5 = obj.miner.devices[4];
    const device6 = obj.miner.devices[5];
    const device7 = obj.miner.devices[6];


    document.getElementById("d1").innerHTML = device1.info;
    document.getElementById("d2").innerHTML = device2.info;
    document.getElementById("d3").innerHTML = device3.info;
    document.getElementById("d4").innerHTML = device4.info;
    document.getElementById("d5").innerHTML = device5.info;
    document.getElementById("d6").innerHTML = device6.info;
    document.getElementById("d7").innerHTML = device7.info;
} 


const getEther = async () => {
    try {
        await fetch (
            'https://api.ethermine.org/miner/0xD7bB60e73709780c64c7AC77BA72D89d335ACF0D/currentStats'
        )
        .then((res) => res.json())
        .then((data) => obj = data)
        console.log(obj.data);
      
    } catch (error) {
        console.log('looks like you messed something up with the Ether');
    }

    const usdPerDay = obj.data.usdPerMin * 1440;
    const usdPerWeek = usdPerDay * 7;
    const usdPerMonth = usdPerDay * 30;
    const usdPerYear = usdPerDay * 365;
    console.log(usdPerDay * 1440);

    document.getElementById("usdPerDay").innerHTML = usdPerDay;
    document.getElementById("usdPerWeek").innerHTML = usdPerWeek;
    document.getElementById("usdPerMonth").innerHTML = usdPerMonth;
    document.getElementById("usdPerYear").innerHTML = usdPerYear;
}



getEther();
getMinerData();