export const mapStateToProps = (state, props) => {
    const {tabs} = state
    const tab = tabs.filter(({editorData, node}) => editorData.id === props.editorData.id && node.getPath() === props.node.getPath())[0] || props.tab

    return {
        tab,
        ...props
    }
}
