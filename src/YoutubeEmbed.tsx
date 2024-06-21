type props={
    embedId: String
}
const YoutubeEmbed = ({ embedId }: props) => {
    return(
        <div className="video-responsive scale-75">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
    )
}

export default YoutubeEmbed;