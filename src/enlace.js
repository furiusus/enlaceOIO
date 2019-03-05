var r = ReactDOM
class Enlace extends React.Component{
    constructor(props){
        super(props);
        this.state={
            enlace:"",
            enlaceConvertido:""
        };
        this.convertir = this.convertir.bind(this);
        this.onChangeEnlace = this.onChangeEnlace.bind(this);
    }
    onChangeEnlace(e){
        this.setState({enlace:e.target.value});
    }
    convertir(enlace){
        var partesEnlace = enlace.split("%2F");
        var enlaceN = "";
        for(var i=0;i<partesEnlace.length;i++){
            if(partesEnlace[i].charAt(0)=="w" && partesEnlace[i].charAt(1)=="w" && partesEnlace[i].charAt(2)=="w"){
                enlaceN = partesEnlace[i];
                i++;
                for(var j=i;j<partesEnlace.length;j++){
                    enlaceN = enlaceN+"/"+partesEnlace[j];
                }
                break;
            }
        }
        this.setState({enlaceConvertido:enlaceN});
    }
    render(){
        var etiq = (
            <div>
                <div>
                    <textarea placeholder="Ingrese enlace" rows={3} cols={100} onChange={this.onChangeEnlace}></textarea>
                </div>
                <hr></hr>
                <div>
                    <button onClick={()=>{this.convertir(this.state.enlace)}}>Convertir</button>
                </div>
                <div>
                    <textarea value={this.state.enlaceConvertido} rows={3} cols={100}></textarea>
                </div>
                <a href={"https://"+this.state.enlaceConvertido}>{this.state.enlaceConvertido}</a>
            </div>
        )
        return(
            <div>
                {etiq}
            </div>
        )
    }
}
r.render(
    <Enlace></Enlace>,
    document.getElementById("enlace")
)