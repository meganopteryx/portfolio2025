
const slogans = [
    "Don't let your dreams stay dreams!", 
    "Twenty Three is Number One!",
    "There are many things",
    "Can you fly if you fall off?",
    "Expand-a-band-band ... art stash!",
    "Purchase the means of production!",
    "Let your imagination take flight!",
    "Always learning, always making!",
    "Harder, better, faster, stronger",
];

function SloganRoulette() {
    const chosenSlogan = Math.floor(Math.random()*slogans.length);

    return (<>{slogans[chosenSlogan]}</>);
}

export {SloganRoulette}