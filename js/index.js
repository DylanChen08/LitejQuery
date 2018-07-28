
window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    if (typeof nodeOrSelector === 'string') {

        let temp = document.querySelectorAll(nodeOrSelector)

        for (let i = 0; i < temp.length; i++) {
            // console.log("in")
            nodes[i] = temp[i];
        }
        nodes.length = temp.length
        // console.log("in")
    } else if (nodeOrSelector instanceof Node) {
        // console.log("in")
        nodes = {
            0: nodeOrSelector,
            length: 1

        }
    }


    nodes.addClass = function (classes) {
        // console.log("in2")
        classes.forEach((value) => {
            console.log("in")
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].classList.add(value)
            }
        });
    }

    nodes.text = function (text) {
        if (text === undefined) {
            var texts = [];
            for (let i = 0; i < texts.length; i++) {
                texts.push(nodes[i].textContent)
            }
            return texts
        } else {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].textContent = text
            }
        }
    }



    return nodes;
}

var nodes2 = jQuery("ul>li")
console.log(nodes2)
nodes2.addClass(['blue'])
nodes2.text('hi')
console.log(nodes2.text())


// console.log("jq", jQuery)
// console.dir(window.jQuery)

// console.log(nodes2.addClass)
