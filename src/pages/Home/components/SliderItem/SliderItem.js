function SliderItem({ data }) {
    return (
        <div className="section-customize">
            <div className="bg-image section-specialty" style={{ backgroundImage: `url(${data.image})` }}></div>
            <div className="name-specialty">{`${data.lastName} ${data.firstName}`}</div>
        </div>
    );
}

export default SliderItem;