import { TextBlock } from "./TextBlock/TextBlock"
import { ServicesList } from "./ServicesList/ServicesList"
import styles from "./Services.module.css"

export const Services = () => {
    return (
        <div className={`${styles.services} wrapper`}>
            <TextBlock />
            <ServicesList />
        </div>
    )
}