var r = ReactDOM;
class Enlace2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            enlace:"",
            enlaceModificado:""
        }
        this.onChangeEnlace = this.onChangeEnlace.bind(this);
        this.convertir = this.convertir.bind(this);
    }
    onChangeEnlace(e){
        this.setState({enlace:e.target.value})
    }
    convertir(enlace){
        var partesEnlace = enlace.split("=");
        let enlaceModificado = partesEnlace[1];
        var enlaceFinal = ""
        for(var i=0;i<enlaceModificado.length;i++){
            if(enlaceModificado.charAt(i)=="%"){
                var hexa = enlaceModificado.charAt(i+1)+enlaceModificado.charAt(i+2);
                i+=2;
                enlaceFinal+=String.fromCharCode(parseInt(hexa, 16));
            }else{
                enlaceFinal+=enlaceModificado.charAt(i);
            }
        }
        this.setState({enlaceConvertido:enlaceFinal})
    }
    render(){
        var etiq = (
            <div>
                <div>
                    <textarea placeholder="Ingrese enlace" rows={3} cols={100} onChange={this.onChangeEnlace}></textarea>
                </div>
                <hr></hr>
                <div>
                    <button onClick={()=>{this.convertir(this.state.enlace)}}>Convertir </button>
                </div>
                <div>
                    <textarea value={this.state.enlaceConvertido} rows={3} cols={100}></textarea>
                </div>
                <a href={this.state.enlaceConvertido} target>{this.state.enlaceConvertido}</a>
            </div>
        )
        return(
            <div>{etiq}</div>
        )
    }
}
r.render(
    <Enlace2></Enlace2>,
    document.getElementById("enlace2")
);