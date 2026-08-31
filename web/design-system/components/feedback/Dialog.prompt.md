Centered modal on a navy scrim; serif title, footer slot for actions.
~~~jsx
<Dialog open={open} title="Withdraw application?" onClose={close} footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="danger">Withdraw</Button></>}>This can't be undone.</Dialog>
~~~