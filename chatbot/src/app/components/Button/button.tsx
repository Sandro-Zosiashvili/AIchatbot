import styles from './Button.module.scss'

type Props = {
    title: String;
    router?: () => void;
    outline?: boolean

}

const Button = (props: Props) => {
    const classes = [styles.container];

    if (props.outline) classes.push(styles.outline)





    return (

        <button type='submit' onClick={props.router} className={classes.join(" ").trim()}>
            <div>
                {props.title}
            </div>
        </button>


    )
}

export default Button