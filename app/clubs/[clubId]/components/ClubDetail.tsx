type Props = {
    promise: Promise<ClubDetail[]>
}

export default async function ClubDetail({promise}: Props) {
    const clubDetails = await promise
    
    const content = clubDetails.map (clubDetail => {
        return (
            <article key={clubDetail.id}>
                <h2>{clubDetail.title}</h2>
                <p>{clubDetail.body}</p>
                <br />
            </article>
        )
    })

    return content
}