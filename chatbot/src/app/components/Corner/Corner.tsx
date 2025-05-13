import styles from './Corner.module.scss'

type Props = {

    rotate: String;
    color?: String;
}

const Corner = (props: Props) => {

    const classes = [styles.container];

    if (props.rotate === "180deg") classes.push(styles.leftBottomCorner)
    else if (props.rotate === "90deg") classes.push(styles.rightBottomCorner)
    else if (props.rotate === "0deg") classes.push(styles.topRightCorner)
    else if (props.rotate === "270deg") classes.push(styles.topLeftCorner)


    if (props.color === 'yellow') classes.push(styles.yellow)
    



    return (
        <div className={classes.join(" ").trim()}>

        </div>
    )
}


export default Corner