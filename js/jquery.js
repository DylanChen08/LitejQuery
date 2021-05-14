//2021重写版
window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }


    return {
        oldApi: selectorOrArray.oldApi,
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
                console.log('working in find')
            }
            // const newApi = jQuery(array)
            // return newApi

            array.oldApi = this
            return jQuery(array)
        },
        end() {
            console.log('end api is working')
            return this.oldApi
        }, //新的api ,使其api用在父元素（上一层），而不是子元素


        each(fn) {
            //闭包elements是上面find的，内部调用外部，仍然可用
            for (let i = 0; i < elements.length; i++) {
                /**
                 * 这里用一个fn 意思是each接受传一个函数，并且传入的这个函数还接受一个任意参数
                 * 例如 elements.each((div)=>{console.log(div)}) 
                 */
                fn.call(null, elements[i], i)
            }
            return this
        },


        parent() {
            const array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },


        children() {
            const array = []
            this.each((node) => {
                array.push(...node.children)
            })
            return jQuery(array)
        },

        print() {
            console.log('print is working')
            console.log('-- Element is printing now --')
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                console.log(`Element is "${element}" `)
            }
            console.log('-- Elements printed --')
        },

        addClass(className) {
            //闭包：外部可访问内部变量
            console.log(1111)
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)

            }
            return this //通过return 可以实现链式操作 element.addclass('className2').addclass('className2')
            //return this === return api
        }
    }
}