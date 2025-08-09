import lightLogo from '../assets/Logo-light.svg'
import darkLogo from '../assets/Logo-dark.svg'

function MeganopteryxLogo() {
    return (
        <picture>
            <source
                srcSet={lightLogo}
                media="(prefers-color-scheme: dark)"
            />
            <img
                src={darkLogo}
                alt="Meganopteryx Design logo"
            />
        </picture>
    )
}
export { MeganopteryxLogo }