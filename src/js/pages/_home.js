/**
 * Home
 */
export default function() {
  $(document).on('click', '.anchor', function() {
    var $target = $(this).attr('href');
    var $offset = $($target).position().top;
    $('body,html').animate({ scrollTop: $offset }, 1000);
    return false;
  });
  $(document).on('click', '.toggle', function() {
    $(this).closest('div').toggleClass('act').find('.target').slideToggle();
    return false;
  });
}