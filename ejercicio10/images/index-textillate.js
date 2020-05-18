$
(function () 
    {
        $('.tlt').textillate
        (
            {
            in: { effect: 'wobble' },
            out: { effect: 'tada', sync: true, 
            reverse: true, delay:50},
            loop:true
            }
        );
    }
)