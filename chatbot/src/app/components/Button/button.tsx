
import styles from './Button.module.scss'

type Props = {
    title: String

}

const Button  = ( props : Props) => {



    return (

        <button className={styles.container}>
            <div>
                {props.title}
            </div>
        </button>


    )
}

export default Button