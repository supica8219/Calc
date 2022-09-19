function divisor() {  //  公約数の数を返す　割れる場合にカウントする
    const n = document.querySelector( 'input' ).value
    let c=n,count=1
    if(n <= 0) return
    while(c--) {
      if(n%c === 0) count++
    }
    update(count.toString());
  }