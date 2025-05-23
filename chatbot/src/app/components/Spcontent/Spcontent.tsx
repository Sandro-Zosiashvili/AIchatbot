import styles from './Spcontent.module.scss'

type Props = {
    content: string;
    fontSize: string;
    width?: string;
    textAlign?: React.CSSProperties["textAlign"];

}



const Spcontent = (props: Props) => {
    const style = {
        fontSize: props.fontSize,
        maxWidth: props.width,
        textAlign: props.textAlign,
    };


    return (
        <div className={styles.container} style={style}>
            {props.content}
        </div>
    )
}

export default Spcontent