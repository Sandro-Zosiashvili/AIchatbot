import styles from './Button.module.scss'

type Props = {
    title: String;
    router?: () => void;

}

const Button  = (props: Props) => {



    return (

        <button onClick={props.router} className={styles.container}>
            <div>
                {props.title}
            </div>
        </button>


    )
}

export default Button