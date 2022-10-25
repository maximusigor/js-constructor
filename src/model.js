import image from './assets/image.png'

export const model = [
    {type: 'title', value: 'Pure JavaScript website builder', options: {
        tag: 'h2',
        styles: `background: linear-gradient(to right, #fdd734, #7a5f3c); color: #fff;`
        }},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: [
            '111111111',
            '222222222',
            '333333333',
        ]},
    {type: 'image', value: image}
]