import React from "react"

export default function canvas() {

    React.useEffect(() => {


        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
        const context = canvas.getContext("2d") as CanvasRenderingContext2D

        let shape = { x: 0, y: 0, w: 32, h: 32, color: "red", dragging: false }

        canvas.onmousemove = mouse_move;
        canvas.onmousedown = mouse_down;
        canvas.onmouseout = mouse_out;
        canvas.onmouseup = mouse_up;

        function is_mouse_in_shape(x: number, y: number, shape: any) {
            let shape_up = shape.y;
            let shape_left = shape.x;
            let shape_down = shape.y + shape.h;
            let shape_right = shape.x + shape.w;
            if (x > shape_left && x < shape_right && y > shape_up && y < shape_down) return true;
            return false;
        }

        function mouse_down(event: MouseEvent) {
            event.preventDefault()
            let mouseX = event.clientX - 75;
            let mouseY = event.clientY;
            shape.dragging = is_mouse_in_shape(mouseX, mouseY, shape)
        }

        function mouse_up(event: MouseEvent) {
            shape.dragging = false;
        }

        function mouse_out(event: MouseEvent) {
            shape.dragging = false;
        }

        function mouse_move(event: MouseEvent) {
            if (!shape.dragging) return
            console.log(shape.dragging)
            shape.x += event.movementX;
            shape.y += event.movementY
        }

        function draw() {
            canvas.width = window.innerWidth - 75;
            canvas.height = window.innerHeight;
            context.clearRect(0, 0, 300, 300);
            context.fillStyle = "red";
            context.fillRect(shape.x, shape.y, 32, 32);
            requestAnimationFrame(draw);
        }

        draw();

    }, [])

    return <canvas>

    </canvas>
}