import Link from 'next/link'

export  default ({breeders}) => {
  const breeder_list = breeders.map((breeder) => 
    <div className="col-sm-4" key={breeder.id}>
      <div className="card">
        <img className="card-img-top" src="/static/images/puppy.jpg" />
        <div className="card-body">
          <Link as={`breeder/${breeder.id}`} href={`/breeder?breeder=${breeder.id}`}><h4 className="card-title">{ breeder.name }</h4></Link>
          <p className="card-text">
            { (breeder.city && breeder.state) ? <span>{ breeder.city }, {breeder.state }</span> : "" }
          </p>
        </div>
      </div>
    </div>
  )

  return <div className="row">{breeder_list}</div>
}
