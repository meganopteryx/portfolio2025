
const slogans = [
    "Don't let your dreams stay dreams!", 
    "Twenty Three is Number One!",
    "There are many things"];

function SloganRoulette() {
    const chosenSlogan = Math.floor(Math.random()*slogans.length);

    return (<>{slogans[chosenSlogan]}</>);
}

export {SloganRoulette}