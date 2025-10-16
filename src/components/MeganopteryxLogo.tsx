import lightLogo from '../assets/Logo-light.svg'
// import darkLogo from '../assets/Logo-dark.svg'

function MeganopteryxLogo() {
    return (
        <picture>
            {/* <source
                srcSet={darkLogo}
                media="(prefers-color-scheme: light)"
            /> */}
            <img
                src={lightLogo}
                alt="Meganopteryx Design logo"
            />
        </picture>
    )
}
export { MeganopteryxLogo }