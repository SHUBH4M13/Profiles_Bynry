const Pointer = (props) => {
    return (
        <>
            <AdvancedMarker
                position={props.location}>
                <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
            </AdvancedMarker>
        </>
    );
};

export default Pointer;