const vol = {
    radius: 50.68,
    pi: 3.14,
    h : 10.12,

    volume : function() {
        return (this.pi*this.radius*2*this.h)
        
    }
}

console.log(vol.volume().toFixed(4));