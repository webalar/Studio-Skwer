import '../socials/socials.scss';
import { socials } from "../../data"

const Socials = () => {
    return (
        <ul className="social-links flex">
           {
            socials.map(item => {
                return (
                    <li key={item.id} className="social-item"><a href={item.url}><img src={item.icon} alt={item.name} /></a></li>
                )
            })
           }
        </ul>
    )
}

export default Socials;