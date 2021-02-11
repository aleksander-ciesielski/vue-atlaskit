import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorLayoutTwoLeftSidebarIcon',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 5h1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1zm5 0h9a1 1 0 011 1v12a1 1 0 01-1 1h-9a1 1 0 01-1-1V6a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
