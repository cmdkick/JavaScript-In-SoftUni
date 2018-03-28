function increment(selector) {
    let textArea = $('<textarea/>')
        .addClass('counter')
        .text('0')
        .attr('disabled', true);

    selector.append(textArea);

    let incrementButton = $('<button/>')
        .addClass('btn')
        .attr('id', 'incrementBtn')
        .text('Increment');

    selector.append(incrementButton);

    let addBtn = $('<button/>')
        .addClass('btn')
        .text('Add');

    selector.append(addBtn);

    let list = $('<ul/>')
        .addClass('results');

    selector.append(list);

    incrementButton.click(function () {
        textArea.text(parseInt(textArea.val()) + 1);
    })

    addBtn.click(function () {
        let li = $('<li/>');
        li.text(textArea.val());

        list.append(li);
    })
}

increment($('#wrapper'));