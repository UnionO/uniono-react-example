import useUnion from '@uniono/react'

const app = {
	value: 0,
	inc: ({ mutations }) => mutations.value.inc(),
	dec: ({ mutations }) => mutations.value.dec(),
}

export default () => useUnion(app)