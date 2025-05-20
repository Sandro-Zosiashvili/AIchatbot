import styles from './Spcontent.module.scss'

type Props = {
    content: string;
    fontSize: string;
    width?: string;
}



const Spcontent = (props: Props) => {
    const style = {
        fontSize: props.fontSize,
        maxWidth: props.width,
    };


    return (
        <div className={styles.container} style={style}>
            {props.content}
        </div>
    )
}

export default Spcontent