const getMinerData = async () => {
    try {
        await fetch (
            'http://72.135.11.115:22333/api/v1/status'
        )
        .then((res) => res.json())
        .then((data) => obj = data)
        console.log(obj.miner.devices[1]);
        
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

//Device Names
    document.getElementById("d1").innerHTML = device1.info;
    document.getElementById("d2").innerHTML = device2.info;
    document.getElementById("d3").innerHTML = device3.info;
    document.getElementById("d4").innerHTML = device4.info;
    document.getElementById("d5").innerHTML = device5.info;
    document.getElementById("d6").innerHTML = device6.info;
    document.getElementById("d7").innerHTML = device7.info;
//Device hashrates
    document.getElementById("hash1").innerHTML = device1.hashrate;
    document.getElementById("hash2").innerHTML = device2.hashrate;
    document.getElementById("hash3").innerHTML = device3.hashrate;
    document.getElementById("hash4").innerHTML = device4.hashrate;
    document.getElementById("hash5").innerHTML = device5.hashrate;
    document.getElementById("hash6").innerHTML = device6.hashrate;
    document.getElementById("hash7").innerHTML = device7.hashrate;

//Device Temperature
    document.getElementById("temp1").innerHTML = device1.temperature;
    document.getElementById("temp2").innerHTML = device2.temperature;
    document.getElementById("temp3").innerHTML = device3.temperature;
    document.getElementById("temp4").innerHTML = device4.temperature;
    document.getElementById("temp5").innerHTML = device5.temperature;
    document.getElementById("temp6").innerHTML = device6.temperature;
    document.getElementById("temp7").innerHTML = device7.temperature;

//Accepted Shares
    document.getElementById("accept1").innerHTML = device1.accepted_shares;
    document.getElementById("accept2").innerHTML = device2.accepted_shares;
    document.getElementById("accept3").innerHTML = device3.accepted_shares;
    document.getElementById("accept4").innerHTML = device4.accepted_shares;
    document.getElementById("accept5").innerHTML = device5.accepted_shares;
    document.getElementById("accept6").innerHTML = device6.accepted_shares;
    document.getElementById("accept7").innerHTML = device7.accepted_shares;

//Rejected Shares
    document.getElementById("reject1").innerHTML = device1.rejected_shares;
    document.getElementById("reject2").innerHTML = device2.rejected_shares;
    document.getElementById("reject3").innerHTML = device3.rejected_shares;
    document.getElementById("reject4").innerHTML = device4.rejected_shares;
    document.getElementById("reject5").innerHTML = device5.rejected_shares;
    document.getElementById("reject6").innerHTML = device6.rejected_shares;
    document.getElementById("reject7").innerHTML = device7.rejected_shares;

//Totals
    const totalHash = device1.hashrate_raw + device2.hashrate_raw + device3.hashrate_raw + device4.hashrate_raw + device5.hashrate_raw + device6.hashrate_raw + device7.hashrate_raw;
    const sTotalHash = String(totalHash)[0] + String(totalHash)[1] + String(totalHash)[2] + '.' + String(totalHash)[3] ;
document.getElementById("totalHash").innerHTML = sTotalHash;

    setTimeout(getMinerData, 5000);
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